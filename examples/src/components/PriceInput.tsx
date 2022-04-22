import { useCallback } from 'react';

interface InputValue {
  amount?: number;
  currency?: string;
}

function PriceInput({
  value = {
    amount: 0,
    currency: 'rmb',
  },
  onChange = (val: InputValue) => {},
}) {
  const handleChange = useCallback(
    (deltaValue: InputValue) => {
      onChange({
        ...value,
        ...deltaValue,
      });
    },
    [value, onChange]
  );

  return (
    <div>
      <input
        value={value.amount}
        onChange={(evt) => handleChange({ amount: Number(evt.target.value) })}
      />
      <select
        value={value.currency}
        onChange={(evt) => handleChange({ currency: evt.target.value })}
      >
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
      </select>
    </div>
  );
}

export default PriceInput;
