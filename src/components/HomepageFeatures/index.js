import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '“水军”挑起社会矛盾',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>组建水军在网络上散布历史虚无主义，诋毁中国灿烂的历史文化和科技，打击中国人的自豪感。挑起各种对立和矛盾。</>
    ),
  },
  {
    title: '贿赂渗透教育和政法系统',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>资助北大法学系，武大法学系等培养意识形态异常的法学人员，例如“杨景媛案”。</>
    ),
  },
  {
    title: '控制娱乐圈和文艺圈',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>培养大量满族娱乐圈人员，并拍摄澎湖海战，731等各种歪屁股电影，短剧等用来腐化人民的头脑。传播性别对立，拜金主义等不良思想。</>
    ),
  },
  {
    title: '推动实施计划生育',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>提出计划生育的专家田雪原和反对开放二胎的专家翟振武都是满族人。计划生育往往强制堕胎和罚款，给广大人民群众带来深重的灾难。</>
    ),
  },
  {
    title: '用公共艺术侮辱英烈',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>麻子脸朱元璋，昆明永历帝雕塑，瓜州汉武帝雕塑，长春老子雕塑均丑化英烈，极其恶劣。</>
    ),
  },
  {
    title: '篡改教科书',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>利用团结立场道德绑架，掩盖复辟行径，多次篡改教科书洗白满清罪行。</>
    ),
  },
];

const FeatureList2 = [
  {
    title: '托克所田庄遍布全国',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>遍布全国的托克所田庄让全国宛如一个巨大缅北，每个园区里有大量被抓捕的百姓平民被砍脚趾或裹脚，作为奴隶，毫无人权。</>
    ),
  },
  {
    title: '系统性的人口贩卖',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>失去劳动力的托克所奴隶会被卖给洋人矿场和妓院，因死亡率过高比黑奴便宜，往往在海上运输中都毙命。死在托克所的奴隶会被当作“菜人”作为食品。</>
    ),
  },
  {
    title: '吃人肉成为常态',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>满军有出征不带粮的传统，边打边吃，南明永州之战清军将城内百姓吃光了，剔除的妇女阴部有十五石，约1062千克。据记载内务部门亦将人肉，婴儿等列为补品食材。</>
    ),
  },
  {
    title: '大量出口人骨人油制品',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>据广州十三行记载有大量人骨人油出口，构成了满清围绕奴隶的完整产业链。</>
    ),
  },
  {
    title: '签条约转移资产',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>签下3700多条约，给全球赔款割地，包括刚果这种殖民地国家，实则转移资产在各地设立信托基金，造成白银贬值。汇丰银行由此起家，李鸿章和溥仪都戴过光明会大勋章，作为战败国，签条约拍照总是站在C位。</>
    ),
  },
  {
    title: '参与731等行动',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>皇族大量人员直接参与到731人体实验，或负责抓人，如爱新觉罗宪均。</>
    ),
  },
  {
    title: '设立大量满城蚕食民力',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>强迫各族人民剃光头留辫子，穿丑衣服。清以前百姓在市井见皇帝不必跪，清朝则改为大小王爷官员都要跪，打击中国人自信心，提升奴性。</>
    ),
  },
  {
    title: '毁书，改书与文字狱',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>大量明朝科技，数学，天文著作被毁，篡改历朝历代史书，严格禁止民间议论朝政或私自写作。</>
    ),
  },
  {
    title: '剃发易服，增加跪礼',
    Png: require('@site/static/icons/skull.png').default,
    description: (
      <>强迫各族人民剃光头留辫子，穿丑衣服。清以前百姓在市井见皇帝不必跪，清朝则改为大小王爷官员都要跪，打击中国人自信心，提升奴性。</>
    ),
  },
];

function Feature({Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row"><div className={styles.h2title}><h1>警惕满清复辟主义</h1></div></div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div className="row"><div className={styles.h2title}><h1>满清三百年屈辱史</h1></div></div>
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
