// import { ReactComponent as NoteIcon1 } from '../../assets/note-icon-1.svg';
// import { ReactComponent as NoteIcon2 } from '../../assets/note-icon-2.svg';
// import { ReactComponent as DesktopIcon } from '../../assets/desktop-icon-1.svg';
// import { ReactComponent as AnalyticsIcon } from '../../assets/analytics-icon-1.svg';
// import { ReactComponent as MoleculeIcon } from '../../assets/molecule-icon.svg';

import Card from '../../components/Card';

function Industries() {
  const industries = [
    {
      name: `Healthcare`,
      description: `We analyze current & historical industry data to predict trends, 
      improve outreach, and even better manage the spread of diseases 
      as well as institute measures to prevent them.`,
     //icon: <NoteIcon1 />
    },
    {
      name: `Pharmaceuticals`,
      description: `Utilizing advanced analytics, we smartly search vast data sets of patents, 
        clinical trial data, drug distribution, and vaccine supply chain management to help accelerate discoveries and processes.`,
     // icon: <MoleculeIcon />
    },
    {
      name: `Manufacturing`,
      description: `We interpret Operations and Events data and Technologies in the manufacturing 
        industry to ensure quality, increase performance, improve yield, cut down costs, and optimize the supply chain.`,
      //icon: <AnalyticsIcon />
    },
    {
      name: `Retail`,
      description: `Converging Big Data from a variety of sources, we help you optimize pricing, 
        understand your supply chain, and improve customer loyalty while increasing your brand presence.`,
      //icon: <DesktopIcon />
    },
    {
      name: `Higher Education`,
      description: `Trace and take targeted actions to improve the learning experience for students. 
        Understand the impact of various learning patterns on student learning to improve outcomes.`,
      //icon: <AnalyticsIcon />
    },
    {
      name: `Financial Services`,
      description: `Make time-sensitive decisions by examining and understanding key matrices & customer 
        data points to easily detect and address fraud and make informed decisions.`,
      //icon: <NoteIcon2 />
    }
  ];
  return (
    <div className='md:bg-wave-pattern bg-no-repeat bg-none bg-cover'>
      <h1 className='text-center font-bold text-5xl mb-16 text-gray-700 '>Industries we serve</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {industries.map((industry, index) => (
          <Card
            key={index}
            title={industry.name}
            desc={industry.description}
            icon={industry?.icon}
            isAnimateTop={index % 2}
          />
        ))}
      </div>
    </div>
  );
}

export default Industries;
