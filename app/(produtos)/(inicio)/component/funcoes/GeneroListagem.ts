import imgRock from "../../../../../public/cardGenero/rockCard.png"
import imgJazz from "../../../../../public/cardGenero/jazzCard.png"
import imgHipHop from "../../../../../public/cardGenero/hiphopCard.png"
import imgPop from "../../../../../public/cardGenero/popCard.png"
import imgMetal from "../../../../../public/cardGenero/metalCard.png"
import imgGeral from "../../../../../public/cardGenero/geralCard.png"
import { EnumGeneroMusicalProduto } from "@/api/types/ProdutoType"

export const generoListagem = [
  {
    nome: "Todos",
    imagem: imgGeral,
  },
  {
    nome: "Rock",
    imagem: imgRock,
    link: EnumGeneroMusicalProduto.Rock
  },
  {
    nome: "Metal",
    imagem: imgMetal,
    link: EnumGeneroMusicalProduto.Metal
  },
  {
    nome: "Jazz",
    imagem: imgJazz,
    link: EnumGeneroMusicalProduto.Jazz
  },
  {
    nome: "HipHop",
    imagem: imgHipHop,
    link: EnumGeneroMusicalProduto.HipHop
  },
  {
    nome: "Pop",
    imagem: imgPop,
    link: EnumGeneroMusicalProduto.Pop
  }
];