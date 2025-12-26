export default function AdminFooter() {
    return (
        <footer className="w-full bg-blue-600 px-10 py-8">
            <div className=" w-full flex justify-evenly flex-wrap gap-10">
                <ul className="space-y-1">
                    <li className=" font-semibold text-white">Company</li>
                    <li className="text-sm  text-grey-200">About Us</li>
                    <li className="text-sm  text-grey-200">Contact</li>
                    <li className="text-sm  text-grey-200">Blog</li>
                    <li className="text-sm  text-grey-200">Support/Help</li>
                </ul>

                <ul className="space-y-1">
                    <li className=" font-semibold text-white">Industries</li>
                    <li className="text-sm  text-grey-200">Finance</li>
                    <li className="text-sm  text-grey-200">Public Sector</li>
                    <li className="text-sm  text-grey-200">Smart Office</li>
                    <li className="text-sm  text-grey-200">Retail</li>
                </ul>

                <ul className="space-y-1">
                    <li className=" font-semibold text-white">Services</li>
                    <li className="text-sm text-grey-200">IT Consulting</li>
                    <li className="text-sm  text-grey-200">Development</li>
                    <li className="text-sm  text-grey-200">Cloud</li>
                    <li className="text-sm  text-grey-200">DevOps & Support</li>
                </ul>
                <ul className="space-y-1">
                    <li className="text-medium font-semibold text-white">Social</li>
                    <li className="text-sm  text-grey-200">Facebook</li>
                    <li className="text-sm  text-grey-200">Instagram</li>
                    <li className="text-sm  text-grey-200">Twitter(x)</li>
                    <li className="text-sm  text-grey-200">LinkedIn</li>
                </ul>
                <div className="max-w-xs text-right">
                    <h2 className="text-xl font-bold text-white">Admin Page</h2>
                    <p className="text-sm text-grey-200 leading-relaxed mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Ab voluptate eum nostrum autem illum delectus?</p>
                </div>
                </div>
                <div className="my-8 h-px w-full bg-white/40"></div>

                <p className="text-center text-sm text-gray-200">@ 2025 All Rights reserved</p>
        </footer>
    );
}