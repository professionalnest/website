

interface Tool {
    id: string;
    name: string;
    logo: string;
}

const tools: Tool[] = [
    { id: '1', name: 'Notion', logo: 'https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/6a791b60-601f-4008-83ee-c3ff6993a111.png' },
    { id: '2', name: 'Nova', logo: 'https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/82bfa6ad-49a3-4ea3-9c18-328f30169ece.png' },
    { id: '3', name: 'Jasper', logo: 'https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/2ec499e5-3694-42a6-8f63-6bb0fdd1f9d9.png' },
    { id: '4', name: 'Claude', logo: 'https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/d00b0616-c548-4644-b2bf-189d65a5a55c.png' },
    { id: '5', name: 'Gamma', logo: 'https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/c07d2ca5-1a0d-4a9c-9753-45a4af6ee1c3.png' },
    { id: '6', name: 'Moosend', logo: 'https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/9cbe2c0d-8fc6-4754-8a14-9014a325e23d.svg' },
];

const ToolsGrid = () => {
    return (
        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-16 bg-cream">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
                Our Top Discounts
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
                {tools.map((tool) => (
                    <div key={tool.id} className="flex items-center justify-center">
                        <div className="w-24 h-24 md:w-16 md:h-16 relative">
                            <img
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ToolsGrid;