// Styles
import './styles/styles.scss';

interface IProps {
  title: string;
}

export const OverlineTitle = ({ title }: IProps) => {
  return (
    <div className="data-head mb-2">
      <h6 className="overline-title">{title}</h6>
    </div>
  );
};
