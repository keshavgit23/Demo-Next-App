export default function AdminFooter(){
    return (
        <div>
            <div className="border border-2-grey bg-blue-600 p-4 w-full flex">
                <ul className="ml-20">
                    <li className="text-medium font-semibold text-white">About</li>
                    <li className="text-medium font-semibold text-white">Contact</li>
                    <li className="text-medium font-semibold text-white">Services</li>
                    <li className="text-medium font-semibold text-white">Support/Help</li>
                </ul>

                 <ul className="ml-20">
                    <li className="text-medium font-semibold text-white">Instagram</li>
                    <li className="text-medium font-semibold text-white">Twitter(x)</li>
                    <li className="text-medium font-semibold text-white">LinkedIn</li>
                </ul>
            </div>
        </div>
    );
}