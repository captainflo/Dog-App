import React from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const Select = ({ breeds }) => {
  const history = useHistory();
  const breedsOptions = [];

  for (let i = 0; i < breeds.length; i++) {
    breedsOptions.push({
      key: breeds[i].name,
      text: breeds[i].name,
      value: breeds[i].id,
      group: breeds[i].breed_group,
    });
  }

  return (
    <Dropdown
      placeholder="Select Pets"
      fluid
      selection
      options={breedsOptions}
      onChange={(e, { value }) =>
        history.push({
          pathname: `/breed/${value}`,
          state: { breedName: e.target.textContent },
        })
      }
    />
  );
};
export default Select;
