export interface BabType{
    id: number,
    bab: string,
    title: string,
    src: string,
    subbabs: SubBabType[]

}
interface SubBabType {
    id: number,
    title: string
}