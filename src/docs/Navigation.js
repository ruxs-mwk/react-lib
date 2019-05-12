import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components}) => {
  return (
    <section class="doc-navigation">
      <ul className="">
         {
           components.map(name => {
             return (
               <li key={name}>
                <a href={`#${name}`}>{name}</a>
                </li>
             )
           })
         }
       </ul>
     </section>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
