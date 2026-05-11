import { Fragment } from "react/jsx-runtime";
import img1920x1080 from "../../../public/assets/ImagensTelaEmBreve/1920x1080.png"
//import img1080x1080 from "../../../public/assets/ImagensTelaEmBreve/1080x1080-2.png"
//import img2560x1080 from "../../../public/assets/ImagensTelaEmBreve/2560x1080.png"
//import imgIconSG from "../../../public/assets/Icones/sgIcone-removebg-preview.png"
import { Layout } from "../../Components/Layout/Layout";
import { Button } from "@/@/components/ui/button";
import { Field, FieldGroup, FieldSet } from "@/@/components/ui/field";
import { Input } from "@/@/components/ui/input";


export function EmBrevePage() {
    return (
        <Fragment>
            <div
                className="w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${img1920x1080})` }}
            >
                <Layout>
                    <div className="ml-20">
                        <div className="w-full">
                            <h1 className="text-6xl flex">
                                <p className="border-solid border-b border-primaria mr-3 pb-6 text-white">EM</p>
                                <p className="text-primaria">BREVE!</p>
                            </h1>
                        </div>
                        <div className="w-1/4 mt-6">
                            <p className="text-white text-lg">Estamos preparando algo incrível para os verdadeiros apaixonados por música e colecionadores de vinil. Aguarde novidades!</p>
                        </div>
                        <div className="mt-6 w-200">
                            <div className="border-solid border border-primaria rounded-lg p-7">
                                <div>
                                    <p className="text-primaria">FIQUE POR DENTRO</p>
                                    <p className="text-white">Siga nossas redes sociais e fale conosco.</p>
                                </div>
                                <div className="flex gap-10">
                                    <div className="flex items-center gap-5 mt-3 border-solid border-r border-white pr-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fcda54" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                        </svg>
                                        <div>
                                            <p className="text-white">Instagram</p>
                                            <p className="text-white">@sgdiscosbr</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 mt-3 border-solid border-r border-white pr-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fcda54" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                        </svg>
                                        <div>
                                            <p className="text-white">WhatsApp</p>
                                            <p className="text-white">(11)95304-1603</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 mt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fcda54" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                        </svg>
                                        <div>
                                            <p className="text-white">E-mail</p>
                                            <p className="text-white">vendas@gascomercio.com.br</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="my-6 flex flex-col gap-2">
                                <p className="text-white text-lg">RECEBA NOVIDADES EM PRIMEIRA MÃO!</p>
                                <p className="text-white text-sm">Deixe seu e-mail e seja o primeiro a saber quando lançarmos!</p>
                            </div>
                            <div>
                                <FieldGroup>
                                    <FieldSet className="w-full w-200">
                                        <Field orientation={"horizontal"}>
                                            <Input className="py-6" type="text" placeholder="Email..."/>
                                            <Button className="bg-primaria text-black p-6">QUERO RECEBER</Button>
                                        </Field>
                                    </FieldSet>
                                </FieldGroup>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </Fragment>
    )
}