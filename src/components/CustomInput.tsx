/*
Input 컴포넌트를 선언적으로 사용하기
1. 입력 타입
2. 입력 이벤트
3. ref
4. ...
* */
import { Dispatch, SetStateAction, useRef } from 'react';
import * as React from 'react';

type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
  setValue: Dispatch<SetStateAction<string>>;
  defaultInputValue?: string;
};

const CustomInput: React.FC<TInput> = ({ setValue, defaultInputValue, max, min, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEvents = () => {
    if (!inputRef.current || !inputRef.current.value.length) {
      setValue('');
      return;
    }
    const typing = inputRef.current.value;
    setTimeout(() => {
      if (typing === inputRef.current?.value) setValue(typing);
    }, 400);
  };
  const numberRangeLimit = () => {
    if (
      min &&
      inputRef.current &&
      parseFloat(inputRef.current.value) < parseFloat(min.toString())
    ) {
      const minValue = parseFloat(min.toString());
      inputRef.current.value = minValue.toString();
      setValue(min.toString());
      return;
    }
    if (
      max &&
      inputRef.current &&
      parseFloat(inputRef.current.value) > parseFloat(max.toString())
    ) {
      const maxValue = parseFloat(max.toString());
      inputRef.current.value = maxValue.toString();
      setValue(max.toString());
      return;
    }
  };
  return (
    <input
      ref={inputRef}
      defaultValue={defaultInputValue}
      onKeyUp={inputEvents}
      onBlur={numberRangeLimit}
      {...rest}
    />
  );
};

export default CustomInput;
