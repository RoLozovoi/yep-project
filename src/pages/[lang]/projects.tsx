import { GetStaticPaths, GetStaticProps } from 'next';
import { getLocalizationProps } from '../../context/LanguageContext';

const Projects = (): JSX.Element => <div>our projects</div>;

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const localization = getLocalizationProps(ctx, 'home');
//   return {
//     props: {
//       localization,
//     },
//   };
// };
//
// export const getStaticPaths: GetStaticPaths = async () => ({
//   paths: ['ru', 'ua'].map((lang) => ({ params: { lang } })),
//   fallback: false,
// });

export default Projects;
