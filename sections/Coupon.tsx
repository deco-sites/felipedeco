import IconCopy from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/copy.tsx";

export interface Props {
  coupon: string;
  percent: string;
}

export default function Coupon({
  coupon = "PIMENTA10",
  percent = "10",
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col justify-center px-8 items-center max-w-screen-lg m-0 auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="font-bold text-2xl mb-4">
          Dia de sorte! Temos um cupom para você!
        </h2>
        <div className="flex justify-center items-center p-4 gap-4 border-2	border-black border-solid cursor-pointer rounded mb-4">
          <p className="font-bold">{coupon}</p>
          <IconCopy class="w-6 h-6" />
        </div>
        <div className="text-gray-700">
          <p className="mb-4">
            Quem não gosta de uma boa pechincha, não é mesmo? Aqui na nossa loja
            de pimentas mexicanas, queremos que você tenha a melhor experiência
            de compra possível, e isso inclui economizar enquanto apimenta a sua
            vida!
          </p>
          <p className="mb-4">
            Com nossos cupons de desconto, você pode experimentar mais
            variedades de pimentas, adicionar aquele molho especial ao carrinho
            e até levar um óleo de pimenta para dar aquele toque final nos seus
            pratos, tudo isso gastando menos. É como encontrar um tesouro
            escondido no meio da selva picante!
          </p>
          <p className="mb-4">
            Imagina só: você coloca no carrinho aquela seleção de pimentas que
            sempre quis provar, aplica o cupom de desconto e, voilà, a mágica
            acontece! É um prazer duplicado – o sabor inigualável das pimentas
            mexicanas e a satisfação de saber que fez um ótimo negócio.
          </p>
          <p className="mb-4">
            Então, não perca tempo! Fique de olho nos nossos cupons, porque além
            de saborosas, nossas promoções são irresistíveis. Use um cupom de
            desconto e descubra como é fácil transformar cada refeição em uma
            explosão de sabores sem estourar o orçamento.
          </p>
          <p className="mb-4">
            Porque aqui, com a gente, economizar é tão bom quanto a sensação de
            uma pimentinha ardendo na boca!
          </p>
          <p className="font-bold">
            Então não perca tempo! Copie já o seu cupom e tenha direito a{" "}
            {percent}% de desconto!
          </p>
        </div>
      </div>
    </div>
  );
}
