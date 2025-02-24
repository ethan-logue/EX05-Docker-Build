import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Select, Box } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import './EmploymentTable.css';

import React from 'react';

const EmploymentTable = ({ title, data, headings }) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const pageCount = Math.ceil(data.length / itemsPerPage);
    const items = [10, 20, 30, 50, 100]

    const handlePageClick = (event) => {
        setPageIndex(event.selected);
    };
    
    const handleSelectChange = (event) => {
        setItemsPerPage(event.target.value);
    };
    
    // Logic for displaying right number of items per page
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = (pageIndex + 1) * itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);

    return (
        <TableContainer className='table-container'>
                <h2>{title}</h2>
                <Box overflowX='auto'>
                    <Table>
                        <Thead>
                            <Tr className='table-row table-header'>
                                {headings.map((heading, index) => (
                                    <Th key={index}>{heading}</Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {displayedData.map((item, index) => (
                                <Tr className='table-row' key={index}>
                                    <Td>{item.employer}</Td>
                                    <Td>{item.degree}</Td>
                                    <Td>{item.city}</Td>
                                    {item.term ? (
                                        <Td>{item.term}</Td>
                                    ) : (
                                        <>
                                        <Td>{item.title}</Td>
                                        <Td>{item.startDate}</Td>
                                        </>
                                    )}
                                </Tr>
                            ))}
                        </Tbody>   
                    </Table>
                </Box>
                <div className='table-footer'>
                    <span className='shown-dropdown'>
                        Items Shown: 
                        <Select className='num-visible' value={itemsPerPage} onChange={handleSelectChange}>
                            {items.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </Select>
                    </span>
                    <ReactPaginate
                        className='pagination'
                        breakLabel="..."
                        nextLabel="Next"
                        previousLabel="Previous"
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={1}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        renderOnZeroPageCount={null}
                    />
                </div>
            </TableContainer>
    );
};

export default EmploymentTable;
