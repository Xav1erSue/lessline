import cn from 'classnames';
import { Check } from 'lucide-react';
import { useContext } from 'react';
import { SelectContext } from './context';
import { OptionProps } from './types';
import { getClsPrefix } from '../../utils';

const clsPrefix = getClsPrefix('select__option-list');

const Option: React.FC<OptionProps> = (props) => {
  const { option, index } = props;

  const { hoveredIndex, setHoveredIndex, handleChange, isSelected } =
    useContext(SelectContext);

  const selected = isSelected(option);

  const handleClick = () => {
    if (option.disabled) return;
    handleChange(option);
  };

  return (
    <div
      key={option.value}
      className={cn(`${clsPrefix}__item`, {
        [`${clsPrefix}__item--hovered`]: hoveredIndex === index,
        [`${clsPrefix}__item--selected`]: selected,
        [`${clsPrefix}__item--disabled`]: option.disabled,
      })}
      onClick={handleClick}
      role="option"
      aria-selected={selected}
      onMouseMove={() => setHoveredIndex(index)}
    >
      <div>
        <span className={`${clsPrefix}__item__label`}>{option.label}</span>
        <span className={`${clsPrefix}__item__description`}>
          {option.description}
        </span>
      </div>
      {selected && <Check />}
    </div>
  );
};

export default Option;
