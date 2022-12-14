import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-center text-3xl md:text-7xl font-bold text-gray-800 mb-5">
                See <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-900 to-green-500">Fungi</span> in your browser.
            </h1>
            <h3 className="text-center text-xl md:text-4xl font-bold text-gray-600">
                Try it out with the fly agaric.
            </h3>
        </Layout>
    );
}
