import React from 'react';
import InputMask from 'react-input-mask';
import { Input, InputProps } from 'reactstrap';

interface InputMaskedCpf extends InputProps {
  name: string;
  className?: string;
  placeholder?: string;
  value: string | number | readonly string[];
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement> & {
      target: { maskedValue?: string };
    },
  ) => void;
}

const InputCpf: React.FC<InputMaskedCpf> = ({
  name,
  value,
  onChange,
  placeholder,
  className,
  ...rest
}: InputMaskedCpf) => {
  const removeMask = (cpfMask: string): string => {
    return cpfMask?.replace(/\D/g, '');
  };

  return (
    <Input
      tag={InputMask}
      value={value}
      maskChar={null}
      onChange={(e) => {
        const formattedValue = removeMask(e.target.value);
        onChange({
          ...e,
          target: {
            ...e.target,
            value: formattedValue,
            maskedValue: e.target.value,
            name,
          },
        });
      }}
      alwaysShowMask={false}
      placeholder={placeholder}
      className={className + ` form-control`}
      mask={'999.999.999-99'}
      {...rest}
    />
  );
};

export default InputCpf;
