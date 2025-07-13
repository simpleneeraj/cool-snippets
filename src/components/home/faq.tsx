import { IonAddOutline } from '@/app-kit/icons/IonAddOutline';
import UIView from '@/app-kit/source/UIView';
import { Accordion, AccordionItem, cn } from '@heroui/react';

const faqData = [
  {
    id: '1',
    question: 'What plans does Crystal Code offer?',
    answer:
      'Crystal Code offers Free, Pro, and Enterprise plans to suit your needs. Each plan includes unique features designed for different users.',
  },
  {
    id: '2',
    question: 'What features are included in the Free plan?',
    answer:
      'The Free plan includes basic access to Crystal Code with limited evaluations and essential features to get you started.',
  },
  {
    id: '3',
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can easily upgrade or downgrade your plan anytime through your account settings.',
  },
  {
    id: '4',
    question: 'Are there any hidden charges?',
    answer:
      'No, all charges are transparent. You pay only for the features included in your selected plan.',
  },
  {
    id: '5',
    question: 'Do you offer a free trial for paid plans?',
    answer:
      'Yes, we offer a 7-day free trial for Pro and Enterprise plans so you can explore all features before committing.',
  },
];

function FaqSection() {
  return (
    <UIView className="mx-auto w-full max-w-2xl relative overflow-hidden pb-24">
      <Accordion variant="bordered">
        {faqData.map(({ id, question, answer }) => (
          <AccordionItem
            disableIndicatorAnimation
            key={id}
            indicator={(props) => (
              <IonAddOutline
                className={cn(
                  'h-5 w-5 transition-all',
                  props.isOpen ? 'rotate-45' : 'rotate-0'
                )}
              />
            )}
            aria-label={question}
            title={question}
            classNames={{
              heading: 'text-base',
              subtitle: 'text-sm',
            }}
          >
            {answer}
          </AccordionItem>
        ))}
      </Accordion>
    </UIView>
  );
}

export default FaqSection;
