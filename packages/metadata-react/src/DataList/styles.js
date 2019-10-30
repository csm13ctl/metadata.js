import {withStyles} from '@material-ui/styles';
//import colors from '@material-ui/core/colors/common';

export default withStyles(({palette, breakpoints}) => ({
  cell: {
    whiteSpace: 'noWrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '.3em',
    boxSizing: 'border-box'
  },
  headerCell: {
    borderLeft: '1px solid #e0e0e0',
  },
  topRightGrid: {
    backgroundColor: palette.primary[100],
    borderBottom: '1px solid #e0e0e0',
    userSelect: 'none',
  },
  star: {
    color: 'darkorange'
  },
  colResize: {
    cursor: 'col-resize',
  },
  evenRow: {},
  oddRow: {
    backgroundColor: '#fafafa'
  },
  hoveredItem: {
    backgroundColor: '#f5f2f2'
  },
  selectedItem: {
    backgroundColor: '#fffbdc'
  },

}));
