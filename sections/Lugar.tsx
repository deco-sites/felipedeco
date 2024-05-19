import type { Temperature } from "apps/weather/loaders/temperature.ts"

export interface Props {
    city: string
    cityDescription: string
    temperature: Temperature | null
}

export default function Lugar(props: Props) {
    return (
        <div className="flex items-center justify-center bg-gray-100 my-8">
            <div className="flex flex-col justify-center px-8 items-center my-8 max-w-screen-lg m-0 auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="font-bold text-2xl mb-4">
                    {props.city}
                </h2>
                <div>
                    <div className="flex justify-center items-center mb-4 text-gray-700">
                        {props.cityDescription}
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex justify-center items-center mb-4 text-gray-700">
                            Hoje a temperatura em {props.city} é de:
                        </div>
                        <div className="border-2 border-black border-solid rounded p-4">    
                            {props.temperature?.celsius}ºC
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}