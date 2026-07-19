
import { IPaginacaoProdutos } from "@/api/types/ProdutoType";
import { Field, FieldLabel } from "@/components/ui/field";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { getPaginas } from "../../funcoes/QuantiaPaginasPaginacao";

interface IPaginacaoProdutosComponent {
    paginacao?: IPaginacaoProdutos;
    onMudarPagina?: (pagina: number) => void;
    onMudarItensPorPagina?: (itens: number) => void;
}

export function PaginacaoProdutos({
    paginacao,
    onMudarPagina,
    onMudarItensPorPagina,
}: IPaginacaoProdutosComponent) {
    if (!paginacao) return null;

    const paginas: (number | "...")[] = getPaginas({
        paginaAtual: paginacao.paginaAtual,
        totalPaginas: paginacao.totalPaginas,
    });


    return (
        <div className="mt-8 flex w-full justify-center">
            <Pagination className="mx-0 w-auto justify-center">
                <PaginationContent className="gap-2">
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            className="h-9 w-9 border border-[#2A2F3A] bg-fundoTerciaria text-white hover:bg-[#2A2F3A] [&>span]:hidden"
                            onClick={(e) => {
                                e.preventDefault();

                                if (paginacao.paginaAtual > 1) {
                                    onMudarPagina?.(paginacao.paginaAtual - 1);
                                }
                            }}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </PaginationPrevious>
                    </PaginationItem>

                    {paginas.map((pagina, index) => {
                        if (pagina === "...") {
                            return (
                                <PaginationItem key={`ellipsis-${index}`}>
                                    <PaginationEllipsis className="text-gray-400" />
                                </PaginationItem>
                            );
                        }

                        return (
                            <PaginationItem key={pagina}>
                                <PaginationLink
                                    href="#"
                                    isActive={pagina === paginacao.paginaAtual}
                                    className={
                                        pagina === paginacao.paginaAtual
                                            ? "h-9 w-9 border border-primaria bg-fundoTerciaria text-primaria hover:bg-fundoTerciaria"
                                            : "h-9 w-9 border border-[#2A2F3A] bg-fundoTerciaria text-white hover:bg-[#2A2F3A]"
                                    }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onMudarPagina?.(pagina);
                                    }}
                                >
                                    {pagina}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            className="h-9 w-9 border border-[#2A2F3A] bg-fundoTerciaria text-white hover:bg-[#2A2F3A] [&>span]:hidden"
                            onClick={(e) => {
                                e.preventDefault();

                                if (
                                    paginacao.paginaAtual <
                                    paginacao.totalPaginas
                                ) {
                                    onMudarPagina?.(
                                        paginacao.paginaAtual + 1
                                    );
                                }
                            }}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </PaginationNext>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}