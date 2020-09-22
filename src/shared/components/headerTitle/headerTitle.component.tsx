import React, {FC} from 'react';
import {Text} from 'react-native';

import {styles} from './headerTitle.style';
import {HeaderTitleModel} from '../../models/headerTitle.models';

const HeaderTitle: FC<HeaderTitleModel> = ({title}) => {
  return <Text style={styles.headerStyle}>{title}</Text>;
};

export default HeaderTitle;
