

interface Tool {
    id: string;
    name: string;
    logo: string;
}

const tools: Tool[] = [
    { id: '1', name: 'Notion', logo: '/tool-logos/notion.png' },
    { id: '2', name: 'Nova', logo: '/tool-logos/notta.png' },
    { id: '3', name: 'Jasper', logo: '/tool-logos/jasper.png' },
    { id: '4', name: 'InVideo', logo: '/tool-logos/invideo.png' },
    { id: '5', name: 'Grammarly', logo: '/tool-logos/grammarly.png' },
    { id: '6', name: 'Moosend', logo: '/tool-logos/moosend.png' },
];

const ToolsGrid = () => {
    return (
        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-16 bg-color-primary-section">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
                Our Top Discounts
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
                {tools.map((tool) => (
                    <div key={tool.id} className="flex items-center justify-center mt-4">
                        <div className="text-center">
                            <img
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                width={75}
                                height={75}
                            />
                            <div className="font-bold mt-4">{tool.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ToolsGrid;