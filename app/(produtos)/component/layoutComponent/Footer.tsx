import { CardDescription } from "@/components/ui/card";
import Image from "next/image";
import {
    Mail,
    MailIcon,
    MapPin,
    Phone,

} from "lucide-react";
import logoSgDiscos from "../../../../public/icon/logoSgDiscosSemEscrita.png";
import Link from "next/link";

export function FooterInicio() {
    return (
        <div className="w-full flex justify-center mt-4 pl-4 border-t border-fundoSecundaria">
            <footer className="w-full">
                <div className="sm:w-3/4 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">

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
                            <Link
                                href="https://www.instagram.com/sgdiscosbr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="border border-gray-500 p-2 rounded-full cursor-pointer transition hover:border-primaria hover:bg-primaria/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="25px" height="25px" viewBox="0 0 32 32" id="Camada_1" version="1.1">
                                        <g>
                                            <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
                                            <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
                                            <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                            <div className="flex gap-3">
                                <Link
                                    href="/email"
                                    rel="noopener noreferrer"
                                >
                                    <div className="border border-gray-500 p-2 rounded-full cursor-pointer transition hover:border-primaria hover:bg-primaria/10">
                                        <MailIcon size={25} className="text-white" />
                                    </div>
                                </Link>
                                <Link
                                    href="https://wa.me/5511953041603"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-gray-500 p-2 rounded-full transition hover:border-primaria hover:bg-primaria/10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#FFFFFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#FFFFFF" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Navegação */}
                    <div className="flex flex-col gap-3 lg:justify-self-center">
                        <h2 className="text-primaria font-semibold uppercase">
                            Navegação
                        </h2>
                        <Link
                            href="/"
                            rel="noopener noreferrer"
                        >
                            <p className="text-gray-400 hover:text-white cursor-pointer">Início</p>
                        </Link>
                        <Link
                            href="/listagemProdutos"
                            rel="noopener noreferrer"
                        >
                            <p className="text-gray-400 hover:text-white cursor-pointer">Catálogo</p>
                        </Link>
                        <Link
                            href="/contato"
                            rel="noopener noreferrer"
                        >
                            <p className="text-gray-400 hover:text-white cursor-pointer">Contato</p>
                        </Link>
                    </div>

                    {/* Atendimento */}
                    <div className="flex flex-col gap-5 lg:justify-self-end">
                        <h2 className="text-primaria font-semibold uppercase">
                            Atendimento
                        </h2>

                        <div className="flex gap-3">
                            <Phone className="text-primaria mt-1" size={18} />
                            <div>
                                <p className="text-white">(11) 95304-1603</p>
                                <p className="text-gray-500 text-sm">
                                    Todos os Dias, 9h às 18h
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
                    <div className="sm:w-3/4 w-full mx-auto flex flex-col md:flex-row justify-between items-center py-6 text-gray-500 text-sm">
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