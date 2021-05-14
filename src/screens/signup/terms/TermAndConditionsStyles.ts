import { StyleSheet, Dimensions } from 'react-native';

const containerWidth = Dimensions.get("window").width * 0.9;
const height = Dimensions.get("screen").height;

export default StyleSheet.create({
    emailSentContainer: {
        paddingTop: 30,
        alignItems: 'flex-start',
        paddingBottom: 50,
        maxHeight: height,
        backgroundColor: '#fff',
        flex: 1,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderBottomColor: "rgba(0,0,0,1)",
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 10
    },
    contentContainer: {
        alignItems: 'center'
    },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 150,
        fontSize: 25,
        color: '#000000',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 10, 
        width: '80%',
        color: '#7da1ed',
        textAlign: 'left',
        opacity: 0.8,
        fontSize: 14,
        lineHeight: 22,
    },
    closeIcon: {
        marginLeft: 10,
    },
    menuIcon: {
        marginRight: 10,
    },
    tocText: {
        fontWeight: 'bold',
        marginTop: 50, 
        width: '100%',
        color: '#000000',
        paddingBottom: 20,
        textAlign: 'left',
        fontSize: 14,
        borderBottomColor: 'rgba(0,0,0,1)',
        borderBottomWidth: 1,
    },
    textContainer: {
        display: 'flex',
        width: containerWidth,
        marginHorizontal: 20,
        marginTop: 60,
    },
    backButton: {
        marginTop: 70,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    termText: { 
        opacity: 0.8, 
        marginTop: 20 
    }, 
});