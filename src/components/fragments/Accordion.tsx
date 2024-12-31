import { Faq } from "@/types/response";

type AccordionItemProps = {
  id: string;
  index: number;
  question: string;
  answer: string;
};

type AccordionGroupProps = {
  id: string;
  data: Faq['data'];
  className?: string;
};

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ id, data, className }) => {
  return (
    <div className={className}>
      <div id={id} className="accordion-wrapper">
        {data.map((faq, index) => (
          <AccordionItem
            key={index}
            id={id}
            index={index + 1}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ id, index, question, answer }) => {
  return (
    <div className="card accordion-item shadow-lg">
      <div className="card-header" id={`${id}-heading-${index}`}>
        <button
          className="collapsed"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}-collapse-${index}`}
          aria-expanded="false"
          aria-controls={`${id}-collapse-${index}`}
        >
          {question}
        </button>
      </div>
      <div
        id={`${id}-collapse-${index}`}
        className="collapse"
        aria-labelledby={`${id}-heading-${index}`}
        data-bs-parent={`#${id}`}
      >
        <div className="card-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
