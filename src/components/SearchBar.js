import React, { Component, useState } from 'react';

import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';
// import { Icon, Button, Input, AutoComplete } from 'antd';


class SearchBar extends Component {

  const Complete: React.FC = () => {

    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

      const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
      };

      const onSelect = value => {
        console.log('onSelect', value);
      };


      render() {
        return (
          <div>
            <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{
                width: 300,
              }}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
            >
              <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
          </div>
        );
      }
  }


}

export default SearchBar;
