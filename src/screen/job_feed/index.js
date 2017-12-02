import React, {Component} from "react";
import {connect} from "react-redux";
import I18n from "./../../i18n/i18n";
import {
  AppContainer,
  List
} from "./../../component";
import CardContent from "./CardContent";
import {handleFetchData} from "./../../actions/JobFeedListAction";

let fetching = false;

class JobFeedScreen extends Component {
  componentDidMount() {
    this.props.handleFetchData();
  }

  loadMore() {
    if(!fetching) {
      this.props.handleFetchData(this.props.data.page + 1, false, true);
      fetching = true;
    }
  }

  renderItem(item) {
    return(
      <CardContent
        image={item.recruiter.avatar.url}
        name={item.recruiter.name}
        postDate={item.post_date}
        title={item.title}
        location={item.location.name}
        salary={item.salary}
        closing_date={item.closing_at}
      />
    )
  }

  render () {
    return (
      <AppContainer loading={this.props.data.loading}>
        <List
          data={this.props.data.listData}
          renderItem={this.renderItem}
          onRefresh={() => this.props.handleFetchData(1, true, false)}
          onEndReached={() => this.loadMore()}
          onMomentumScrollBegin={() => fetching = false}
          loadingMore={this.props.data.loadingMore}
        />
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.jobFeedListData
  }
};

const actions = {handleFetchData};
export default connect(mapStateToProps, actions)(JobFeedScreen);
