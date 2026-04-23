import "../styles/Select.css"
import React, { useMemo } from "react";


const Select = React.forwardRef(({
  products,
  value,
  onChange,
  placeholder = '',
  disabled = false,
  ...rest
}, ref) => {
  // Формируем массив опций из продуктов или используем готовый options
  /*let selectOptions = [];

  if (options) {
    selectOptions = options;
  } else if (products && products.length > 0) {
    // Извлекаем уникальные категории из массива товаров
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    selectOptions = uniqueCategories.map(cat => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1) // Первая буква заглавная
    }));
  }*/

  // Классы для стилизации
  //const selectClasses = `select select--${size} ${error ? 'select--error' : ''} ${className}`.trim();

  return (
    <select
      products={products}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    >
    </select>
  );
});

Select.displayName = 'Select';

export default Select;