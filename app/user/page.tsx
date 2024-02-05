"use client";
import { firestore, historiesDatabaseRef, usersDatabaseRef } from "@/lib/firebase";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Chip, Divider, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import LoadingUsers from "./loading";
import { UserType } from "@/types/UserType";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { NotificationIcon } from "@/icons/NotificationIcon";
// import UserStatistik from "./statistik";
import { HistoriesData } from "@/data/HistoriesData";
import dynamic from "next/dynamic";

const UserStatistik = dynamic(() => import('./statistik'), { ssr: false })

let usersRef = collection(firestore, "users")
const emptyUser: UserType = {
  id: "",
  name: "",
  email: ""
}
const db = getDatabase();

export default function UserPage() {
  const { theme, setTheme } = useTheme();
  const [isFollowed, setIsFollowed] = useState(false);

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<UserType[]>([])

  const [user, setUser] = useState<UserType>(emptyUser)
  const [password, setPassword] = useState<string>("")

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const [isSucces, setSuccess] = useState(false)
  const [messageNotif, setMessageNotif] = useState("")

  const isInvalid = useMemo(() => {
    // if (user.email === "") return false;
    return validateEmail(user.email) ? false : true;
  }, [user.email]);

  const isInvalidPassword = useMemo(() => {
    // if (user.email === "") return false;
    return password.length < 8 ? true : false;
  }, [password]);

  const [submitted, setSubmitted] = useState(false);

  function setTimeoutSuccess() {
    setSuccess(true)
    setTimeout(function () {
      setSuccess(false)
    }, 5000)
  }
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

  const saveUser = () => {
    setSubmitted(true);
    // console.log({ user });
    if (user.name?.trim() && user.email?.trim() && password?.trim()) {
      // setUsers(_users);
      setMessageNotif("User Created")
      onOpenChange()
      setTimeoutSuccess()
      setUser(emptyUser);
    }
  }

  function openStatistick(user: UserType) {
    setUser(user)
    onOpen()
  }

  function resetNilai() {
    console.log({ user });
    HistoriesData.map((history) => {
      console.log(history);
      set(ref(db, 'histories/' + user.id + '/' + history.idGame), {
        id: history.id,
        idGame: history.idGame,
        idUser: user.id,
        score: history.score,
        status: history.status,
      }).then(() => {
        console.log(`History ${history.idGame} reset`)
        onOpenChange()
      })
    })

  }


  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-6xl mt-6">

        <div className="flex flex-row items-center">
          <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500">
            Users
          </h1>
          {/* <Button
            className="font-medium bg-gradient-to-r from-pink-500 to-yellow-600 text-white shadow-lg px-10"
            onClick={onOpen}
          >
            Create new User
          </Button> */}
        </div>

        {
          isSucces && <Chip
            className="mt-5 w-full px-10"
            endContent={<NotificationIcon size={18} />}
            variant="flat"
            color="success"
          >
            {messageNotif}
          </Chip>
        }


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
                    Statistik Pengguna
                  </h3>
                </ModalHeader>
                <ModalBody>

                  {/* <Input
                    isRequired
                    value={user.name}
                    label="User name"
                    variant="bordered"
                    isInvalid={!user.name}
                    color={!user.name ? "danger" : "success"}
                    errorMessage={!user.name && "Username is required"}
                    onValueChange={(e) => setUser({ ...user, name: e })}
                    className=""
                  />
                  <Input
                    isRequired
                    value={user.email}
                    type="email"
                    label="Email"
                    variant="bordered"
                    isInvalid={isInvalid && !user.email}
                    color={isInvalid ? "danger" : "success"}
                    errorMessage={isInvalid && "Please enter a valid email"}
                    onValueChange={(e) => setUser({ ...user, email: e })}
                    className=""
                  />

                  <Input
                    value={password}
                    isInvalid={isInvalidPassword}

                    isRequired
                    label="Password"
                    variant="bordered"
                    color={isInvalidPassword ? "danger" : "success"}

                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    errorMessage={isInvalidPassword && "password must greater 8 length"}
                    onValueChange={setPassword}
                    className=""
                  /> */}

                  <UserStatistik userId={user.id} />

                  <Divider />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="ghost" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="secondary" variant="ghost" onPress={resetNilai} className="px-10">
                    Reset Nilai
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>




        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mt-4">
          {
            loading ? [...Array(15)].map((x, i) =>
              <LoadingUsers key={i} />
            ) :
              users.map((item, i) => (
                <div key={i} className="w-full">
                  <Card className="max-w-[340px]">
                    <CardHeader className="justify-between">
                      <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="/avatars/hacker.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="text-small font-semibold leading-none text-default-600">{item.name}</h4>
                          <h5 className="text-small tracking-tight text-default-400">{item.email}</h5>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                      {/* <p>{item.description}</p> */}
                      {/* <span className="pt-2">
                        #FrontendWithUse
                        <span className="py-2" aria-label="computer" role="img">
                          💻
                        </span>
                      </span> */}
                    </CardBody>
                    <CardFooter className="gap-3">
                      {/* <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 cursor-pointer"
                        onClick={() => openStatistick(item)}
                      >
                        Statistik
                      </p> */}
                      <Button color="secondary" variant="ghost" onPress={() => openStatistick(item)} className="px-10">
                        Statistik
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
