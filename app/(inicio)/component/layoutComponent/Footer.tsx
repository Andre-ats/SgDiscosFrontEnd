import { CardDescription } from "@/components/ui/card";
import Image from "next/image";
import {
    Mail,
    MailIcon,
    MapPin,
    MessageCircle,
    Phone,

} from "lucide-react";
import logoSgDiscos from "../../../../public/icon/logoSgDiscosSemEscrita.png";
import instaLogo from "../../../../public/icon/instaIcon.png";
import Link from "next/link";

export function FooterInicio() {
    return (
        <div className="w-full flex justify-center mt-4 pl-4 border-t border-fundoSecundaria">
            <footer className="w-full">
                <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">

                    {/* Logo */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src={logoSgDiscos}
                                alt="SG Discos"
                                width={42}
                                height={42}
                            />

                            <CardDescription className="text-3xl">
                                <span className="text-primaria">SG</span>
                                <span className="text-white">DISCOS</span>
                            </CardDescription>
                        </div>

                        <div className="flex gap-3 mt-6 text-gray-400 w-fit">
                            <div className="border border-gray-500 p-2 rounded-full cursor-pointer transition hover:border-primaria hover:bg-primaria/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="25px" height="25px" viewBox="0 0 32 32" id="Camada_1" version="1.1">
                                    <g>
                                        <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
                                        <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
                                        <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="flex gap-3">
                                <div className="border border-gray-500 p-2 rounded-full cursor-pointer transition hover:border-primaria hover:bg-primaria/10">
                                    <MailIcon size={25} className="text-white" />
                                </div>

                                <Link
                                    href="https://wa.me/5511953041603"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-gray-500 p-2 rounded-full transition hover:border-primaria hover:bg-primaria/10"
                                >
                                    <MessageCircle size={25} className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Navegação */}
                    <div className="flex flex-col gap-3 justify-self-center">
                        <h2 className="text-primaria font-semibold uppercase">
                            Navegação
                        </h2>

                        <p className="text-gray-400 hover:text-white cursor-pointer">Início</p>
                        <p className="text-gray-400 hover:text-white cursor-pointer">Catálogo</p>
                        <p className="text-gray-400 hover:text-white cursor-pointer">Contato</p>
                    </div>

                    {/* Atendimento */}
                    <div className="flex flex-col gap-5 justify-self-end">
                        <h2 className="text-primaria font-semibold uppercase">
                            Atendimento
                        </h2>

                        <div className="flex gap-3">
                            <Phone className="text-primaria mt-1" size={18} />
                            <div>
                                <p className="text-white">(11) 95304-1603</p>
                                <p className="text-gray-500 text-sm">
                                    Seg a Dom, 9h às 18h
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Mail className="text-primaria mt-1" size={18} />
                            <div>
                                <p className="text-white">
                                    vendas@gascomercio.com.br
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Respondemos rapidamente
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <MapPin className="text-primaria mt-1" size={18} />
                            <div>
                                <p className="text-white">
                                    São Paulo - SP
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Enviamos para todo o Brasil
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center py-6 text-gray-500 text-sm">
                        <p>
                            © {new Date().getFullYear()}{" "}
                            <span className="text-primaria">
                                SGDiscos
                            </span>
                            . Todos os direitos reservados.
                        </p>

                    </div>
                </div>
            </footer>
        </div>
    );
}