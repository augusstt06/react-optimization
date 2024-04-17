import { useState } from 'react';

import MemorizeInput from '@/components/CustomInput.tsx';

const InputOpt = () => {
  const [nameInput, setNameInput] = useState<string>('');
  const [numInput, setNumInput] = useState<string>('0');

  const inputLists = [
    {
      type: 'text',
      placeholder: 'name fields',
      setValue: setNameInput,
    },
    {
      type: 'number',
      placeholder: 'num fields',
      setValue: setNumInput,
      defaultInputValue: '0',
      max: 5,
      min: -2,
    },
  ];
  return (
    <section>
      <h3>Input Optimization</h3>
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <h3>name : {nameInput}</h3>
        <h3>num : {numInput}</h3>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        {inputLists.map((data) => (
          <MemorizeInput
            key={data.placeholder}
            type={data.type}
            setValue={data.setValue}
            placeholder={data.placeholder}
            defaultInputValue={data.defaultInputValue}
            max={data.max}
            min={data.min}
          />
        ))}
      </section>
    </section>
  );
};
export default InputOpt;
