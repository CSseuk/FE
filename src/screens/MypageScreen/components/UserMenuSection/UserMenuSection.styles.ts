import styled from '@emotion/native';

export const Container = styled.View(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.Neutral.N0,
}));

export const UserInfo = styled.View({
  paddingVertical: 18,
});

export const Username = styled.Text(({ theme }) => ({
  ...theme.typography.H3,
  color: theme.colors.Neutral.N600,
}));

export const EditText = styled.Text(({ theme }) => ({
  ...theme.typography.Body3,
  color: theme.colors.Neutral.N200,
}));

export const Hr = styled.View(({ theme }) => ({
  height: 4,
  backgroundColor: theme.colors.Neutral.N20,
  marginVertical: 18,
}));

export const MenuItem = styled.TouchableOpacity(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginVertical: 18,
}));

export const MenuLabel = styled.Text(({ theme }) => ({
  color: theme.colors.Neutral.N600,
  ...theme.typography.Body1,
}));

export const ArrowIcon = styled.Image({
  width: 24,
  height: 24,
});
