// 语言配置文件
const messages = {
  zh: {
    home: {
      title: '易经预测',
      subtitle: '选择您需要的预测服务',
      divination: {
        title: '断事',
        subtitle: '预测未发生的事情',
        button: '开始测算'
      },
      lifePrediction: {
        title: '测命',
        subtitle: '预测一生未来的妻子、财富、孩子、俸禄、寿命',
        button: '开始测算'
      }
    },
    divination: {
      title: '断事预测',
      subtitle: '预测未发生的事情',
      form: {
        name: '姓名',
        gender: '性别',
        predictionType: '预测内容',
        numbers: '三个数字',
        email: '邮箱',
        submit: '提交预测'
      },
      predictionTypes: {
        work: '工作事业',
        love: '姻缘爱情',
        legal: '官非口舌',
        relationship: '恋情发展',
        exam: '考试出国',
        divorce: '婚变离婚',
        promotion: '升职调动',
        business: '投资经商',
        search: '寻人寻物',
        affair: '婚外出轨',
        money: '求财趋势',
        travel: '出行吉凶',
        partnership: '合伙求财',
        health: '疾病灾祸',
        shortTermMoney: '短期求财',
        overall: '整体运势'
      },
      instructions: {
        title: '高岛易断操作说明',
        step1: '1. 静心冥想您要预测的问题',
        step2: '2. 随机生成三个数字，每个数字在1-9之间',
        step3: '3. 第一个数字为上卦，第二个数字为下卦，第三个数字为动爻',
        step4: '4. 例如：数字3、6、2 表示火水未济卦，九二爻动'
      },
      payment: '付款获取详细预测结果'
    },
    lifePrediction: {
      title: '测命预测',
      subtitle: '预测一生未来的妻子、财富、孩子、俸禄、寿命',
      form: {
        name: '姓名',
        gender: '性别',
        birthday: '出生年月日时',
        email: '邮箱',
        submit: '提交预测'
      },
      predictionContent: {
        title: '预测内容',
        description: '我们将为您预测以下内容：',
        items: [
          '妻子/丈夫情况',
          '财富状况',
          '子女情况',
          '俸禄官职',
          '寿命预测',
          '整体运势'
        ]
      },
      payment: '付款获取详细预测结果'
    },
    dashboard: {
      title: '后台仪表盘',
      subtitle: '管理用户预测数据',
      divination: '断事预测数据',
      lifePrediction: '测命预测数据',
      table: {
        serialNumber: '编号',
        id: 'ID',
        name: '姓名',
        gender: '性别',
        predictionType: '预测内容',
        number1: '数字1',
        number2: '数字2',
        number3: '数字3',
        birthday: '出生年月日时',
        email: '邮箱',
        createdAt: '提交时间',
        paymentStatus: '付款状态',
        male: '男',
        female: '女',
        paid: '已付款',
        unpaid: '未付款'
      }
    },
    guide: {
      title: '取数文档',
      preparation: '首先准备道具',
      preparationItems: [
        '你要准备50根竹签或者50个吸管，任何50个一模一样的东西都可以',
        '你要准备一支笔',
        '你要准备一张白纸'
      ],
      steps: '取数步骤',
      step1: '1：50根竹签里边拿出一根不用，只保留49根，然后把这个竹签放在你的额头，同时聚精会神，请神明（默念）回答你的问题：比如说你问我最近财运如何？或者我这单生意能不能赚到钱？或者我这次旅行是否能够拿到加拿大签证？等等很多这类的问题。',
      step2: '2：屏息凝视，最后心越来越静，心越来越静的时候，停止呼吸之后；把这个问题聚焦于额头，果断的把这一把筷子分成两份，分成两份之后。',
      step3: '3：男女不同：',
      male: '男士',
      maleSteps: [
        '看左手保留的竹签，右手的竹签放于桌子上；每8只竹签一组，把它放到一边，相当于数学除以8，将余数写下第一个数字；',
        '将49根竹签收到手中再次重复刚才的动作，这次男士看右手保留的竹签，左手的竹签放于桌子上；每8只竹签一组，把它放到一边，相当于数学除以8，将余数写下第二个数字；',
        '将49根竹签收到手中再次重复刚才的动作，这次男士看左手保留的竹签，左手的竹签放于桌子上；每6只竹签一组，把它放到一边，相当于数学除以6，将余数写下第三个数字；'
      ],
      female: '女士',
      femaleSteps: [
        '取3个数字的方法和男士正好相反，先看右手-左手-右手这个顺序同样取出3个数字；'
      ],
      notices: '注意事项',
      noticeItems: [
        '取数过程中要保持专注，心无杂念',
        '每个问题只取一次数，不要重复取数',
        '取数时要尊重易经的神圣性，保持敬畏之心',
        '如果取数过程中被打断，建议重新开始'
      ]
    },
    about: {
      title: '东方易经占卜须知',
      greeting: '致远方来客',
      welcome: '欢迎踏入这片承载千年智慧的东方秘境。此处以《易经》为钥，开启天地人共鸣的占卜之门——不同于西方测算的逻辑推演，我们以卦象为镜，照见万物运行的深层韵律，助您在喧嚣中寻得内心的定盘星。',
      section1: {
        title: '一、东方易经：与西方测算的本质之别',
        intro: '《易经》非占卜之书，乃“究天人之际”的宇宙密码。它不依赖星盘刻度或数据统计，而以阴阳辩证、卦象流转、天人合一为核心：',
        characteristics: ['源远', '玄妙', '入心'],
        details: [
          '传承三千载，融天文、地理、人文于一体，如长江大河汇百川而成其深；',
          '以“象”喻理（如乾为天、坤为地），以“变”应万（六爻流转藏吉凶之机），似雾中观山，见轮廓更见神韵；',
          '不止断事，更启悟——让您在卦辞爻象中，照见自身能量与天地周期的共振。'
        ],
        conclusion: '这与西方测算的“线性预判”不同，恰如中医“望闻问切”之于西医化验，前者探本源，后者析表象。'
      },
      section2: {
        title: '二、占卜前的重要准备',
        intro: '为使卦象与您的心念同频，请遵循以下心法：',
        steps: ['平心静气', '择静地而行', '一事一占'],
        details: [
          '摒弃杂念，如古井止水。占卜非“求答案”，乃“观全局”——焦虑或执念会遮蔽卦象真意；',
          '于独处之室、无人扰处进行，让环境如空谷般容纳您的专注；',
          '每次仅问一事（如事业抉择、情感困惑），贪多则卦乱，如镜蒙尘难显像。'
        ]
      },
      section3: {
        title: '三、服务时间与咨询方式',
        hours: {
          title: '占卜时段',
          details: '周一至周五，上午9:00至下午4:00（东方时区）。此时天地阳气渐盛，卦象最显清明；'
        },
        contact: {
          title: '咨询邮箱',
          details: 'bfinfo@163.com<br>（请简述事由、困惑核心，我们将以卦象为引，附白话解读与趋避建议，邮件回复周期为1-2个工作日）。'
        }
      },
      section4: {
        title: '四、须知结语',
        quote: '《易经》云：“易无思也，无为也，寂然不动，感而遂通天下之故。”占卜非宿命枷锁，乃觉醒之梯——愿您在此照见本心，借东方智慧之风，扬帆属于自己的命运之海。',
        conclusion: '静候与君共鸣。',
        note: '注：本服务以文化传承为旨，解读仅供参考，人生主动权始终在您手中。'
      }
    },
    common: {
      required: '*',
      select: '请选择',
      male: '男',
      female: '女',
      year: '年',
      month: '月',
      day: '日',
      hour: '时',
      submit: '提交',
      error: {
        required: '所有字段不能为空！',
        numberRange: '数字1和数字2必须在1-9之间，数字3必须在1-6之间！',
        date: '请输入有效的出生年月日时！',
        submitFailed: '提交失败，请稍后重试！',
        systemError: '系统错误，请稍后重试！'
      },
      success: {
        submit: '表单提交成功！请点击下方付款按钮获取详细预测结果。'
      }
    }
  },
  en: {
    home: {
      title: 'I Ching Prediction',
      subtitle: 'Choose your prediction service',
      divination: {
        title: 'Event Prediction',
        subtitle: 'Predict future events',
        button: 'Start Prediction'
      },
      lifePrediction: {
        title: 'Life Prediction',
        subtitle: 'Predict future wife, wealth, children, career, and lifespan',
        button: 'Start Prediction'
      }
    },
    divination: {
      title: 'Event Prediction',
      subtitle: 'Predict future events',
      form: {
        name: 'Name',
        gender: 'Gender',
        predictionType: 'Prediction Type',
        numbers: 'Three Numbers',
        email: 'Email',
        submit: 'Submit Prediction'
      },
      predictionTypes: {
        work: 'Career',
        love: 'Love Relationship',
        legal: 'Legal Issues',
        relationship: 'Relationship Development',
        exam: 'Exams & Abroad',
        divorce: 'Marital Issues',
        promotion: 'Promotion & Transfer',
        business: 'Investment & Business',
        search: 'Finding People & Things',
        affair: 'Extramarital Affairs',
        money: 'Wealth Trend',
        travel: 'Travel Fortune',
        partnership: 'Partnership求财',
        health: 'Health & Disasters',
        shortTermMoney: 'Short-term Wealth',
        overall: 'Overall Fortune'
      },
      instructions: {
        title: 'Takashima Yi Operation Instructions',
        step1: '1. Meditate on your question',
        step2: '2. Randomly generate three numbers between 1-9',
        step3: '3. First number for upper trigram, second for lower trigram, third for moving line',
        step4: '4. Example: Numbers 3, 6, 2 represent Fire-Water Wei Ji hexagram, ninth two moving line'
      },
      payment: 'Pay to get detailed prediction results'
    },
    lifePrediction: {
      title: 'Life Prediction',
      subtitle: 'Predict future wife, wealth, children, career, and lifespan',
      form: {
        name: 'Name',
        gender: 'Gender',
        birthday: 'Date of Birth',
        email: 'Email',
        submit: 'Submit Prediction'
      },
      predictionContent: {
        title: 'Prediction Content',
        description: 'We will predict the following for you:',
        items: [
          'Spouse Situation',
          'Wealth Status',
          'Children Situation',
          'Career & Income',
          'Life Expectancy',
          'Overall Fortune'
        ]
      },
      payment: 'Pay to get detailed prediction results'
    },
    dashboard: {
      title: 'Admin Dashboard',
      subtitle: 'Manage user prediction data',
      divination: 'Event Prediction Data',
      lifePrediction: 'Life Prediction Data',
      table: {
        serialNumber: 'Serial Number',
        id: 'ID',
        name: 'Name',
        gender: 'Gender',
        predictionType: 'Prediction Type',
        number1: 'Number 1',
        number2: 'Number 2',
        number3: 'Number 3',
        birthday: 'Date of Birth',
        email: 'Email',
        createdAt: 'Submission Time',
        paymentStatus: 'Payment Status',
        male: 'Male',
        female: 'Female',
        paid: 'Paid',
        unpaid: 'Unpaid'
      }
    },
    guide: {
      title: 'Number Guide',
      preparation: 'Preparation',
      preparationItems: [
        'Prepare 50 bamboo sticks or 50 straws, any 50 identical items will work',
        'Prepare a pen',
        'Prepare a piece of white paper'
      ],
      steps: 'Number Selection Steps',
      step1: '1: Take out one stick from the 50 sticks, leaving only 49. Place this stick on your forehead, focus your mind, and silently ask the gods to answer your question: For example, "How is my recent financial luck?" or "Can I make money from this business?" or "Can I get a Canadian visa for this trip?" and many other similar questions.',
      step2: '2: Breathe deeply and focus, when your mind becomes calm and still, hold your breath; focus the question on your forehead, then果断 divide the sticks into two parts.',
      step3: '3: Different methods for men and women:',
      male: 'Men',
      maleSteps: [
        'Look at the sticks in your left hand, place the sticks in your right hand on the table; group them into sets of 8 sticks, place them aside, equivalent to dividing by 8, write down the remainder as the first number;',
        'Collect all 49 sticks and repeat the action, this time men look at the sticks in their right hand, place the sticks in their left hand on the table; group them into sets of 8 sticks, place them aside, equivalent to dividing by 8, write down the remainder as the second number;',
        'Collect all 49 sticks and repeat the action, this time men look at the sticks in their left hand, place the sticks in their left hand on the table; group them into sets of 6 sticks, place them aside, equivalent to dividing by 6, write down the remainder as the third number;'
      ],
      female: 'Women',
      femaleSteps: [
        'The method for selecting 3 numbers is the opposite of men, look at right hand - left hand - right hand in this order to select 3 numbers;'
      ],
      notices: 'Notes',
      noticeItems: [
        'Stay focused during the number selection process, with no distractions',
        'Only select numbers once per question, do not repeat',
        'Respect the sacredness of the I Ching during number selection, maintain a respectful attitude',
        'If interrupted during the process, it is recommended to start over'
      ]
    },
    about: {
      title: 'Eastern I Ching Divination Guide',
      greeting: 'To Our Distant Guests',
      welcome: 'Welcome to this Eastern mystical realm carrying thousands of years of wisdom. Here, we use the I Ching as a key to open the door of divination that resonates with heaven, earth, and humanity—unlike Western calculations\' logical deduction, we use hexagrams as a mirror to reflect the deep rhythms of all things, helping you find your inner compass in the chaos.',
      section1: {
        title: 'I. Eastern I Ching: The Essential Difference from Western Calculation',
        intro: 'The I Ching is not a book of divination, but a cosmic code that "investigates the relationship between heaven and humanity." It does not rely on astrological scales or data statistics, but centers on yin-yang dialectics, hexagram transformations, and the unity of heaven and humanity:',
        characteristics: ['Ancient Origins', 'Profound Mystery', 'Spiritual Insight'],
        details: [
          'Passed down for three thousand years, integrating astronomy, geography, and humanities, like the Yangtze River gathering hundreds of rivers to form its depth;',
          'Using "images" to illustrate principles (such as Qian for heaven, Kun for earth), using "change" to respond to all things (six lines flowing with good and bad fortune), like viewing mountains in fog, seeing both outline and spirit;',
          'Not just predicting events, but enlightening—allowing you to see the resonance between your own energy and the cycles of heaven and earth in the hexagram texts and line statements.'
        ],
        conclusion: 'This differs from Western calculations\' logical deduction, just as traditional Chinese medicine\'s "observation, listening, questioning, and pulse-taking" differs from Western medical tests—the former explores the source, the latter analyzes the surface.'
      },
      section2: {
        title: 'II. Important Preparations Before Divination',
        intro: 'To align the hexagrams with your thoughts, please follow these mental principles:',
        steps: ['Calm Your Mind', 'Choose a Quiet Place', 'One Question Per Divination'],
        details: [
          'Let go of distractions, like still water in an ancient well. Divination is not "seeking answers," but "observing the whole"—anxiety or obsession will obscure the true meaning of the hexagrams;',
          'Perform it in a private room, undisturbed place, letting the environment be like an empty valley to accommodate your focus;',
          'Only ask one question at a time (such as career decisions, emotional confusion), asking too many will confuse the hexagrams, like a dusty mirror that cannot show a clear image.'
        ]
      },
      section3: {
        title: 'III. Service Hours and Consultation Methods',
        hours: {
          title: 'Divination Hours',
          details: 'Monday to Friday, 9:00 AM to 4:00 PM (Eastern Time Zone). At this time, the yang energy of heaven and earth is gradually rising, and the hexagrams are most clear;'
        },
        contact: {
          title: 'Consultation Email',
          details: 'bfinfo@163.com<br>(Please briefly describe the matter and core confusion, we will use hexagrams as a guide, attach plain language interpretations and suggestions, email response time is 1-2 business days).'
        }
      },
      section4: {
        title: 'IV. Concluding Remarks',
        quote: 'The I Ching says: "The Yi has no thoughts, no actions, remains still, and through resonance connects to all things under heaven." Divination is not a destiny shackle, but a ladder to awakening—may you see your true self here, and with the wind of Eastern wisdom, sail your own sea of destiny.',
        conclusion: 'Waiting for resonance with you.',
        note: 'Note: This service aims at cultural inheritance, interpretations are for reference only, and the initiative of life is always in your hands.'
      }
    },
    common: {
      required: '*',
      select: 'Please select',
      male: 'Male',
      female: 'Female',
      year: 'Year',
      month: 'Month',
      day: 'Day',
      hour: 'Hour',
      submit: 'Submit',
      error: {
        required: 'All fields are required!',
        numberRange: 'Number 1 and 2 must be between 1-9, Number 3 must be between 1-6!',
        date: 'Please enter a valid date of birth!',
        submitFailed: 'Submission failed, please try again later!',
        systemError: 'System error, please try again later!'
      },
      success: {
        submit: 'Form submitted successfully! Please click the payment button below to get detailed prediction results.'
      }
    }
  }
}

export default messages