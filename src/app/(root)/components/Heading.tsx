const Heading = ({
  text,
  heading,
  paragraph,
}: {
  text?: string;
  heading?: string;
  paragraph?: string;
}) => {
  return (
    <div className="text-center max-w-md mx-auto mb-12">
      {text && <h4 className="font-bold text-main mb-5">{text}</h4>}
      {heading && <h2 className="font-bold text-4xl mb-5">{heading}</h2>}
      {paragraph && <p className="text-sm text-gray-600">{paragraph}</p>}
    </div>
  );
};

export default Heading;
