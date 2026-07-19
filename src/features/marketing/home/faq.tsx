import UIView from '@shared/uikit/UIView';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@shared/ui/accordion';

const faqData = [
  {
    id: '1',
    question: 'How much does Cool Snippets cost?',
    answer:
      'Nothing. Every theme, effect, and export option is free, and there are no paid tiers. The project is funded by sponsors instead of by charging for features.',
  },
  {
    id: '2',
    question: 'Do I need an account?',
    answer:
      'No. There is no sign-up and no login. Open the studio and start creating straight away.',
  },
  {
    id: '3',
    question: 'Where are my snippets stored?',
    answer:
      'In your browser. Your work stays on your own device and is never uploaded to a server, so clearing your browser data will also clear your snippets.',
  },
  {
    id: '4',
    question: 'Is it really open source?',
    answer:
      'Yes. Cool Snippets is MIT licensed and the full source is on GitHub. You are free to read it, fork it, self-host it, or contribute back.',
  },
  {
    id: '5',
    question: 'How can I support the project?',
    answer:
      'Star the repository, report bugs, or send a pull request. If you would rather support it financially, GitHub Sponsors and Buy Me a Coffee both help keep it free for everyone.',
  },
];

function FaqSection() {
  return (
    <UIView className="mx-auto w-full max-w-2xl relative pb-24">
      <Accordion>
        {faqData.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger className="text-base">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-sm">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </UIView>
  );
}

export default FaqSection;
