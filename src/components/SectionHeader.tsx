interface SectionHeaderProps {
  /** Title of the section – must be a string */
  title: string;
}

/**
 * Simple heading component used across the resume.
 * Accepts only a `title` prop of type `string`.
 */
export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="section-header text-2xl font-bold mb-4">
      {title}
    </h2>
  );
}
