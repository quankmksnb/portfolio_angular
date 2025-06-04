export default interface WorkStudiesModel {
    aLink?: string;
    imgUrl: string;
    imgTitle: string;
    category: {
        name: string;
        type: 'fintech' | 'edtech' | 'pharma';
    };
    contentH4: string;
    description: string;
    buttonType: 'warning' | 'primary' | 'info';
    contentButton: string;
    isSpecial?: boolean;
}