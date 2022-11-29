import { StyledLabel } from "components/CommonStyled/Label.styled"
import { StyledInput } from "components/CommonStyled/Input.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/filterSlice";
import {  getStatusFilter } from "redux/selectors";
export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getStatusFilter);

    const handleFilter = e => {
        dispatch(filter(e.target.value));
      };
  
    return ( <StyledLabel htmlFor="">Find contacts by name
          <StyledInput type="text" value={value} onChange={handleFilter} />
        </StyledLabel>)
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}