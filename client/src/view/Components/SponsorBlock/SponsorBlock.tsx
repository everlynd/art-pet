import { Box } from '@mui/system';
import s from './SponsorBlock.module.scss'
import spnsr1 from '../../../assets/img/sponsor1.png';
import spnsr2 from '../../../assets/img/sponsor2.png';
import spnsr3 from '../../../assets/img/sponsor3.png';
import spnsr4 from '../../../assets/img/sponsor4.png';
import spnsr5 from '../../../assets/img/sponsor5.png';

export const SponsorBlock = () => {
    return (
        <div className={s['marquee']}>
            <Box sx={{ display: 'flex', gap: '80px' }} className={s['track']}>
                <Box>
                    <img src={spnsr3} />
                </Box>
                <Box>
                    <img src={spnsr1} />
                </Box>
                <Box>
                    <img src={spnsr4} />
                </Box>
                <Box>
                    <img src={spnsr2} />
                </Box>
                <Box>
                    <img src={spnsr5} />
                </Box>
                <Box>
                    <img src={spnsr3} />
                </Box>
                <Box>
                    <img src={spnsr4} />
                </Box>
                <Box>
                    <img src={spnsr1} />
                </Box>
                <Box>
                    <img src={spnsr5} />
                </Box>
                <Box>
                    <img src={spnsr3} />
                </Box>
                <Box>
                    <img src={spnsr4} />
                </Box>
            </Box>
        </div>
    );
};
