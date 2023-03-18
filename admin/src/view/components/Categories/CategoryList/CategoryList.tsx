import { Divider, Grid, Input, Stack, Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { changeIsActive } from '../CreateCategory/Category.helper';

export const CategoryList = ({ ...props }) => {
    const cats = useMemo(() => {
        let result: any[] = [];
        props.categories
            ? props.categories.forEach((elem: any) => {
                  if (elem.children && elem.children.length) {
                      elem.children.forEach((item: any) => result.push(item));
                  }
                  result.push(elem);
              })
            : null;
        return result;
    }, [props.categories]);
    return (
        <Box sx={{ boxShadow: '0 5px 10px 0 rgb(66 66 66 / 30%)' }}>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', padding: '10px 25px' }}>
                <Typography sx={{ fontWeight: '600' }} variant={'h6'}>
                    Categories
                </Typography>
                <Input placeholder="search" />
            </Stack>

            <Divider />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '20px 0px',
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }}
            >
                <Box sx={{ padding: '0 25px' }}>Title</Box>
                <Box>Root Category</Box>
                <Box>Status</Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr','& a': {
                textDecoration: 'none',color: 'inherit'}}} className="category-list">
                {cats.length
                    ? cats.map((elem) => (
                          <React.Fragment key={Math.random()}>
                              <Link to={`${elem.id}`} key={elem.title + Math.random()}>{elem.title}</Link>
                              <Box key={Math.random()}>
                                  {elem.parentId ? cats.find((item) => item.id === elem.parentId).title : '—'}
                              </Box>
                              <Box key={Math.random()}>
                                  <Switch
                                      checked={elem.isActive}
                                      onChange={() => {
                                          props.setIsActive(elem.id);
                                          changeIsActive(elem.id);
                                      }}
                                  />
                              </Box>
                          </React.Fragment>
                      ))
                    : null}
            </Box>
        </Box>
    );
};
