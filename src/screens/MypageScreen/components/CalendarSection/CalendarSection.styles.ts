import styled from '@emotion/native';

export const CalendarHeader = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N600,
}));

export const CalendarWrapper = styled.View({
  gap: 12,
});

export const Picker = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
});

export const PickerLabel = styled.Text(({ theme }) => ({
  ...theme.typography.Button_Small,
  color: theme.colors.Neutral.N600,
  textAlign: 'center',
}));

export const ArrowButton = styled.TouchableOpacity<{ disabled?: boolean }>(
  ({ disabled }) => ({
    opacity: disabled ? 0.3 : 1,
    // 버튼이 비활성화 상태일 경우 흐리게 아이콘 표시
  })
);

export const ArrowIcon = styled.Image({
  width: 16,
  height: 16,
});
