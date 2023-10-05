"use client";
import { database, firestore, historiesDatabaseRef, usersDatabaseRef } from "@/lib/firebase";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Divider, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserType } from "@/types/UserType";
import { HistoryType } from "@/types/HistoryType";
import { gamesTitleData } from "@/data/GamesTitleData";
import LoadingHistories from "./loading";
import HistoryCart from "./cart";
import { onValue, ref, set } from "firebase/database";
import HistoryContent from "./content";
import HistoryUser from "./user";

let usersRef = collection(firestore, "users")

interface HistoryResponse {
  id: string,
  histories: HistoryType[]
}

export default function Subscribe() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<UserType[]>([])
  const [histories, setHistories] = useState<HistoryResponse[]>([])
  const [nestedList, setNestedList] = useState<{ [key: string]: string[] }>({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    return onValue(usersDatabaseRef, (snapshot) => {
      setUsers([])
      snapshot.forEach((value) => {
        let user: UserType = value.val() as UserType
        setUsers((prevData) => [...prevData, {
          id: value.key, name: user.name, email: user.email
        }])
      })
      setLoading(false)

    })
  }, [])

  useEffect(() => {
    // setLoading(true)
    return onValue(historiesDatabaseRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Data from Firebase:', data);
      if (data) {
        // Set the nested list in your state
        setNestedList(data);

        Object.keys(data).map((listKey: string) => {
          // console.log({ listKey });
          {
            let listHistories: HistoryType[] = []

            Object.keys(data[listKey]).map((item: string) => {
              const history: HistoryType = data[listKey][item]
              listHistories.push(history)

            })

            setHistories((prevData) => [
              ...prevData, {
                id: listKey,
                histories: listHistories
              }
            ])
          }
        })
      }
      // const listHistories = snapshot.val() as HistoryType[]
      // console.log({ listHistories });

      // setUsers([])
      // setHistories([])
      // snapshot.forEach((value) => {
      //   // console.log(value.val());
      //   value.forEach((valueChild) => {
      //     let history: HistoryType = valueChild.val() as HistoryType
      //     setHistories((prevData) => [...prevData, history])
      //   })
      // })
      // setLoading(false)

    })

  }, [])

  function confirmReset(userId: string) {
    onOpen()
  }

  function submitReset() {

  }


  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-6xl mt-6">
        <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500">
          Histories
        </h1>

        {/* <Button
          className="font-medium bg-gradient-to-r from-pink-500 to-yellow-600 text-white shadow-lg px-10"
          onClick={onOpen}
        >
          Create new User
        </Button> */}

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          isDismissable={false}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h3 className="flex flex-grow text-2xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-yellow-600 to-50% text-transparent bg-clip-text">
                    Confirm
                  </h3>
                </ModalHeader>
                <ModalBody>
                  <p>Are you to reset ?</p>
                  <Divider />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="ghost" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="secondary" variant="ghost" onPress={onClose} className="px-10">
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-4">
          {
            loading ? [...Array(15)].map((x, i) =>
              <LoadingHistories key={i} />
            ) :
              histories.map((item, index) => (
                <div key={index} className="w-full">
                  <Card className="max-w-full">
                    <CardHeader className="justify-between">
                      <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="/avatars/hacker.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                          {/* <h4 className="text-small font-semibold leading-none text-default-600">{item.id}</h4> */}
                          {/* <h5 className="text-small tracking-tight text-default-400">{item.email}</h5> */}
                          <HistoryUser userId={item.id} />
                        </div>
                      </div>

                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                      {/* <p>{item.description}</p> */}
                      <span className="pt-2">
                        <HistoryContent histories={item.histories} />
                        {/* <HistoryCart items={item.histories} /> */}
                        {/* {histories.filter((history) => history?.idUser === item.id).length}
                          <span className="py-2" aria-label="computer" role="img">
                            💻
                          </span> */}
                      </span>
                    </CardBody>
                    <CardFooter className="gap-3">
                      <Button
                        className="font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                        onClick={onOpen}
                      >
                        Reset
                      </Button>

                    </CardFooter>
                  </Card>
                </div>
              ))
          }
        </div>


      </div>
    </main>
  );
}
