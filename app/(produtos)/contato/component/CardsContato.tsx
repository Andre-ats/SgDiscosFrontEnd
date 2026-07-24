import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Clock, Mail } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

export function CardsContato() {
    return (
        <Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-5">
                {/*WhatsApp*/}
                <Card className="bg-fundoSecundaria p-10 sm:p-15">
                    <CardHeader className="flex justify-center">
                        <div className="border border-fundoTerciaria p-3 rounded-full bg-fundoTerciaria">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                                <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#fcda54" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#fcda54" />
                            </svg>
                        </div>
                    </CardHeader>
                    <div className="flex justify-center">
                        <div>
                            <p className="text-xl text-white text-center">WhatsApp</p>
                            <div className="mx-auto my-5 h-0.5 w-1/4 bg-primaria"></div>
                            <p className="text-gray-400 text-center">Atendimento rápido <br /> fale diretamente conosco.</p>
                            <div className="mx-auto h-0.5 w-full bg-fundoTerciaria my-5"></div>
                            <p className="text-primaria text-lg text-center">(11) 95304-1603</p>
                            <div className="mt-5 flex justify-center">
                                <Link
                                    href="https://wa.me/5511953041603"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="p-7 bg-primaria hover:bg-primaria cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                                            <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#000000" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#000000" />
                                        </svg>
                                        <p className="text-black">
                                            Iniciar conversa
                                        </p>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
                {/*Email*/}
                <Card className="bg-fundoSecundaria p-10 sm:p-15">
                    <CardHeader className="flex justify-center">
                        <div className="border border-fundoTerciaria p-3 rounded-full bg-fundoTerciaria">
                            <Mail color="#fcda54" height={50} width={50} />
                        </div>
                    </CardHeader>
                    <div className="flex justify-center">
                        <div>
                            <p className="text-xl text-white text-center">E-mail</p>
                            <div className="mx-auto my-5 h-0.5 w-1/4 bg-primaria"></div>
                            <p className="text-gray-400 text-center">Respondemos em <br /> até 24h no seu e-mail</p>
                            <div className="mx-auto h-0.5 w-full bg-fundoTerciaria my-5"></div>
                            <p className="text-primaria text-lg text-center">vendas@gascomercio.com.br</p>
                            <div className="mt-5 flex justify-center">
                                <Link href={`/email`}>
                                    <Button className="p-7 bg-primaria hover:bg-primaria cursor-pointer">
                                        <Mail color="black" />
                                        <p className="text-black">
                                            Enviar e-mail
                                        </p>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
                {/*Horario*/}
                <Card className="bg-fundoSecundaria p-10 sm:p-15">
                    <CardHeader className="flex justify-center">
                        <div className="border border-fundoTerciaria p-3 rounded-full bg-fundoTerciaria">
                            <Clock color="#fcda54" height={50} width={50} />
                        </div>
                    </CardHeader>
                    <div className="flex justify-center">
                        <div>
                            <p className="text-xl text-white text-center">Horário de atendimento</p>
                            <div className="mx-auto my-5 h-0.5 w-1/4 bg-primaria"></div>
                            <p className="text-gray-400 text-center">Atendemos em nosso horário <br /> comercial.</p>
                            <div className="mx-auto h-0.5 w-full bg-fundoTerciaria my-5"></div>
                            <p className="text-gray-400 text-center">Todos os Dias, 9h às 18h</p>
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}