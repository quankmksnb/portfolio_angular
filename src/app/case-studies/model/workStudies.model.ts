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
  buttonType:
    | 'btn-warning btn-case-study'
    | 'btn-primary btn-case-study'
    | 'btn-info btn-case-study';
  contentButton: string;
  isSpecial?: boolean;
}
