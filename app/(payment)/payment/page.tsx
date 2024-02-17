
import Address from "./_components/address/index";
import Delivery from "./_components/delivery";
import Payment from "./_components/payment";

export default function PaymentPage () {
    return (
        <div className="max-w-5xl w-full px-4">
            <Address />
            <div className="mt-10">
                <Delivery />
            </div>
            <div>
                <Payment />
            </div>
            <div>
                Review
            </div>
        </div>
    )
}