import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BookIcon from '@mui/icons-material/Book';
export const GetItems = () => {
  let json = {
    list: [
      {
        id: 0,
        name: "Home",
        icon: <HomeIcon sx={{color: "#66cdaa"}}/>,
      },
      {
        id: 1,
        name: "System Config",
        icon: <SettingsSuggestIcon sx={{color: "#66cdaa"}}/>,
      },
      {
        id: 2,
        name: "Stage Processing",
        icon: <SendIcon sx={{color: "#66cdaa"}}/>,
        subitems: [
          {
            id: 1,
            name: "Download",
            icon: <DownloadIcon sx={{color: "#66cdaa"}}/>,
          },
          {
            id: 2,
            name: "Upload",
            icon: <UploadIcon sx={{color: "#66cdaa"}}/>,
          },
        ],
      },
      {
        id: 3,
        name: "Transaction Processing",
        icon: <ReceiptIcon sx={{color: "#66cdaa"}}/>,
        subitems: [
          {
            id: 1,
            name: "Error Processing",
          },
        ],
      },
      {
        id: 4,
        name: "Account maintenance",
        icon: <BookIcon sx={{color: "#66cdaa"}}/>,
        subitems: [
          {
            id: 1,
            name: "Account maintenance",
          },
          {
            id:2,
            name: "Account creation",
          },
        ],
      },
    ],
  };
  return json;
};
