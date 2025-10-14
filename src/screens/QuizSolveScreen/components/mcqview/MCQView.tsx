import { FlatList, View } from 'react-native';
import * as S from './MCQView.styles';

import TopQuiz from '../topquiz/TopQuiz';
import { Button } from '@design-system/index';

type MCQViewProps = {
  selectedOption: string;
  onSelectOption: (optionId: string) => void;
  quizId: string;
  options: any;
  title: string;
  prompt: string;
};

export default function MCQView({
  selectedOption,
  onSelectOption,
  quizId,
  options,
  title,
  prompt,
}: MCQViewProps) {
  return (
    <S.Wrapper>
      <TopQuiz quizId={quizId} title={title} prompt={prompt} />
      <FlatList
        data={options}
        keyExtractor={(o) => o.id}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => {
          const isSelected = selectedOption === item.id;
          return (
            <View style={{ width: '100%' }}>
              <Button
                title={item.text}
                button="Tertiary"
                visualDisabled={!isSelected}
                size="L"
                onPress={() => onSelectOption(item.id)}
                rightIconName="check"
              />
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </S.Wrapper>
  );
}
