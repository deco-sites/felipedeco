import Image from "apps/website/components/Image.tsx";
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/heart.tsx";

interface Product {
    title: string;
    description?: string;
    price: number;
    imageSrc: string;
};

export interface Props {
    product: Product;
    adDescription?: string;
};

export default function ProductAd(props: Props) {
    const formattedPrice = (price: number) => {
        const priceString = (price / 100).toFixed(2).replace('.', ',');
        return priceString
    }

    return (
        <div className="bg-gray-100 my-8">
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="relative">
                    <Image
                        src={props.product.imageSrc}
                        class="w-80 min-w-80 h-80 object-cover rounded mt-4"
                        width={800}
                        height={1200}
                    />
                    <button
                        type="button"
                        class="px-3 py-2 bg-white rounded border(gray-400 1) hover:bg-gray-200 flex gap-2 absolute top-8 right-8"
                    >
                        <IconHeart class="w-6 h-6" />
                    </button>
                </div>
                <div className="flex flex-col justify-center mx-4 mt-8 md:mt-0">
                    <div className="text-center font-bold text-red-500 text-2xl p-4">
                        {props.product.title}
                    </div>

                    <div className="p-4 overflow-hidden">
                        {props.product.description}
                    </div>

                    <div className="text-center font-bold text-red-500 text-2xl p-4">
                        R$ {formattedPrice(props.product.price)}
                    </div>

                    <footer className="flex items-center justify-center my-8 gap-4 md:flex-row md:justify-end flex-col">
                        <button className="btn w-56 btn-outline btn-secondary font-bold">
                            Mais detalhes
                        </button>
                        <button className="btn w-56 btn-secondary text-white font-bold">
                            Comprar
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}