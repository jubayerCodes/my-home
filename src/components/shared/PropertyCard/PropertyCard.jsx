import theme from '@/theme';
import { Box, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const PropertyCard = ({ property }) => {

    const { _id, photos, title, price, description, bedrooms, bathrooms, property_size, featured, listed_in, status, address } = property


    // TODO: Need to make it dynamic
    const img = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'


    // TODO: Need to make it dynamic
    const agent = 'Jubayer'

    const cardStyle = {
        boxShadow: '0 10px 31px 0 rgba(7, 152, 255, 0.09)'
    }

    return (
        <Card className='single-property relative' style={cardStyle}>
            {
                featured && <Typography fontSize={14} component={'span'} className='absolute top-2 left-2 bg-[#69c17dd9] text-white px-[6px] rounded-sm'>
                    Featured
                </Typography>
            }

            <Box className={'flex justify-end items-center gap-2 absolute top-2 right-2'}>
                {
                    listed_in && <Typography fontSize={14} component={'span'} className='bg-[#0073e1d9] text-white px-[6px] rounded-sm'>
                        {listed_in}
                    </Typography>
                }
                {
                    status && <Typography fontSize={14} component={'span'} className='bg-[#0073e1d9] text-white px-[6px] rounded-sm'>
                        {status}
                    </Typography>
                }
            </Box>
            <Link href={'#'}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={'https://main.wpresidence.net/wp-content/uploads/2017/11/3-525x328.webp'}
                />
            </Link>
            <CardContent className='px-4 pb-0'>
                {/* TODO: Make link dynamic */}
                <Link href={'#'}>
                    <Typography gutterBottom component={'span'} className='flex justify-start items-center gap-1' variant='body2'>
                        {address.address}, {address.city}
                    </Typography>
                </Link>
                <Link href={'#'}>
                    <Typography gutterBottom variant="h5" component="div" fontSize={20} fontWeight={500}>
                        {title}
                    </Typography>
                </Link>
                <Typography gutterBottom variant="h6" component="div" fontSize={16} fontWeight={500} color='main'>
                    $ {price.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.split(' ').slice(0, 15).join(' ')}...
                </Typography>
                <Box display={'flex'} justifyContent={'space-between'} component={'div'} className='mt-2'>
                    <Typography variant='body1' fontSize={15} component={'span'}>
                        Bedrooms: {bedrooms}
                    </Typography>
                    <Typography variant='body1' fontSize={15} component={'span'}>
                        Bathrooms: {bathrooms}
                    </Typography>
                    <Typography variant='body1' fontSize={15} component={'span'}>
                        Area: {property_size} ft<sup>2</sup>
                    </Typography>
                </Box>
                <Divider className='pt-4' />
            </CardContent>
            <CardActions style={{ padding: '0px', display: 'block' }}>
                {/* TODO: MAKE agent pic dynamic */}
                <Box component={'div'} padding={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Link href={'#'}>
                        <Box component={'div'} className='flex justify-start items-center gap-2'>
                            <Image src={img} alt='agent' width={30} height={30} className='rounded-full' />
                            <Typography variant='body2' component={'span'}>
                                {agent}
                            </Typography>
                        </Box>
                    </Link>

                    <button className='rounded-sm text-2xl text-[#0073e1]'>
                        <FaHeart />
                    </button>

                </Box>
            </CardActions>
        </Card>
    );
};

export default PropertyCard;