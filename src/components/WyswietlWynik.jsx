import { SkladkaChorobowa } from "./SkladkaChorobowa"
import { SkladkaEmerytalna } from "./SkladkaEmerytalna"
import { SkladkaRentowa } from "./SkladkaRentowa"

export const WyswietlWynik = () => {

    return (
        <>
            <p>Kwota Netto: </p>
            <ul>
                <SkladkaChorobowa />
                <SkladkaRentowa />
                <SkladkaEmerytalna />
            </ul>
        </>
    )
}
