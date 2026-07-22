'use client'

import { PostEmail } from "@/api/email/PostEmail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { toast } from "sonner";

export enum EnumAssuntoEmail {
    DuvidaProduto = "DuvidaProduto",
    DisponibilidadeProduto = "DisponibilidadeProduto",
    PreVenda = "PreVenda",
    Entrega = "Entrega",
    Sugestao = "Sugestao",
    Parceria = "Parceria",
    Outro = "Outro",
}

export const descricaoAssuntoEmail: Record<EnumAssuntoEmail, string> = {
    [EnumAssuntoEmail.DuvidaProduto]: "Dúvida sobre produto",
    [EnumAssuntoEmail.DisponibilidadeProduto]: "Disponibilidade de produto",
    [EnumAssuntoEmail.PreVenda]: "Pré-venda",
    [EnumAssuntoEmail.Entrega]: "Entrega",
    [EnumAssuntoEmail.Sugestao]: "Sugestão",
    [EnumAssuntoEmail.Parceria]: "Parceria",
    [EnumAssuntoEmail.Outro]: "Outro",
};

export function CardEnviarEmail() {

    const para = "vendas@gascomercio.com.br"
    const [seuEmail, setSeuEmail] = useState("")
    const [assuntoEmail, setAssuntoEmail] =
        useState<EnumAssuntoEmail | "">("");
    const [produto, setProduto] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleEnviarEmail() {
        if (!seuEmail.trim()) {
            toast.error("Informe seu e-mail.");
            return;
        }

        if (!assuntoEmail) {
            toast.error("Selecione um assunto.");
            return;
        }

        if (!mensagem.trim()) {
            toast.error("Digite sua mensagem.");
            return;
        }

        try {
            setLoading(true);

            await PostEmail({
                email: seuEmail,
                assunto: descricaoAssuntoEmail[assuntoEmail],
                corpo: (produto !== "" ? "Produto: " + produto + "\n" : "") + mensagem,
            });

            toast.success("E-mail enviado com sucesso!");

            setSeuEmail("");
            setAssuntoEmail("");
            setProduto("")
            setMensagem("");
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Erro ao enviar o e-mail."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <Fragment>
            <Card className="bg-fundoSecundaria w-full p-10">
                <CardContent>
                    <div className="flex items-center gap-10 border-b border-fundoTerciaria pb-5">
                        <div className="p-5 border border-fundoTerciaria rounded-full bg-fundoTerciaria">
                            <Mail width={30} height={30} color="#fcda54" />
                        </div>
                        <div>
                            <FieldLabel className="text-3xl text-white">Enviar e-mail</FieldLabel>
                            <FieldDescription className="mt-2 text-sm text-gray-400">Preencha os campos abaixo para enviar sua mensagem.</FieldDescription>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="w-full">
                            <FieldLabel className="text-white mt-5">Para</FieldLabel>
                            <InputGroup className="border-[#2A2F3A]">
                                <InputGroupInput
                                    value={para}
                                    className="text-white border-[#2A2F3A]"
                                    disabled
                                    type="text"
                                    placeholder="Ex.: AC/DC"
                                    required
                                />
                            </InputGroup>
                            <p className="text-gray-400 text-[13px] mt-2">Este é o nosso e-mail de contato.</p>
                        </div>
                        <div className="w-full">
                            <FieldLabel className="text-white mt-5">Seu email *</FieldLabel>
                            <InputGroup className="border-[#2A2F3A]">
                                <InputGroupInput
                                    value={seuEmail}
                                    className="text-white border-[#2A2F3A]"
                                    onChange={(e) => setSeuEmail(e.target.value)}
                                    type="text"
                                    placeholder="seuemail@email.com"
                                    required
                                />
                            </InputGroup>
                            <p className="text-gray-400 text-[13px] mt-2">Responderemos para este e-mail.</p>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-1/2">
                            <FieldLabel className="text-white mt-5">
                                Assunto *
                            </FieldLabel>

                            <Select
                                value={assuntoEmail}
                                onValueChange={(value) =>
                                    setAssuntoEmail(value as EnumAssuntoEmail)
                                }
                            >
                                <SelectTrigger className="w-full border-[#2A2F3A] text-white">
                                    <SelectValue placeholder="Selecione um assunto..." />
                                </SelectTrigger>

                                <SelectContent align="start">
                                    <SelectGroup>
                                        {Object.values(EnumAssuntoEmail).map((assunto) => (
                                            <SelectItem key={assunto} value={assunto}>
                                                {descricaoAssuntoEmail[assunto]}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-1/2">
                            <FieldLabel className="text-white mt-5">
                                Produto (opcional)
                            </FieldLabel>

                            <InputGroup className="border-[#2A2F3A]">
                                <InputGroupInput
                                    value={produto}
                                    className="text-white border-[#2A2F3A]"
                                    onChange={(e) => setProduto(e.target.value)}
                                    type="text"
                                    placeholder="Ex.: AC/DC - Back in Black"
                                    required
                                />
                            </InputGroup>

                            <p className="text-gray-400 text-[13px] mt-2">
                                Nome do produto
                            </p>
                        </div>
                    </div>
                    <div>
                        <FieldLabel className="text-white mt-5">
                            Mensagem *
                        </FieldLabel>

                        <div className="w-full">
                            <Textarea
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                maxLength={2000}
                                placeholder="Descreva sua dúvida ou solicitação. Informe o máximo de detalhes possível para que possamos ajudá-lo."
                                className="w-full min-h-40 resize-none break-all text-white border-[#2A2F3A]"
                            />

                            <div className="mt-2 flex justify-end">
                                <span className="text-sm text-zinc-400">
                                    {mensagem.length}/2000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end w-full mt-5">
                        <Button
                            onClick={handleEnviarEmail}
                            type="submit"
                            className="bg-primaria text-color hover:bg-[#ffcf0d] py-5 px-10 cursor-pointer"
                        >
                            <Send /> Enviar e-mail
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}